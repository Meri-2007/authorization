"use server"

import { addTime, createSession, deleteAttempts, getUserById, getUserByLogin, insertUser, resetAttempts, upAttepts, updateExpire, VerifyUser } from "./model"
import bcrypt from 'bcrypt'
import { nanoid } from "nanoid"
import { cookies } from "next/headers"
import { ISession, IUser } from "./types"
import { redirect } from "next/navigation"

interface IState {
    message: string
}

export const handleSignup = async (prevState: IState, form: FormData) => {
    const name = form.get("name") as string
    const surname = form.get("surname") as string
    const login = form.get("login") as string
    let password = form.get("password") as string

    if (!name.trim() || !surname.trim() || !login.trim() || !password.trim()) {
        return { message: "Please fill all the fields" }
    }

    if (password.length < 6) {
        return { message: "Password is too short!!!" }
    }

    const found = getUserByLogin(login)
    if (found) {
        return { message: "Login is busy!" }
    }
    password = await bcrypt.hash(password, 10)
    const result = insertUser({ login, password, name, surname })
    if (result.changes) {
        return redirect("/")
    } else {
        return { message: "Internal server error!" }
    }
}
export const handleLogin = async (state: IState, form: FormData) => {
    const found = getUserByLogin(form.get("login") as string);

    if (!found) {
        return { message: "Login is not found" };
    }

    if (found.attempts >= 3) {
        if (!found.time || Date.now() - found.time >= 10000) {
            resetAttempts(found.id);
            return { message: "you was blocked try later " };
        }
        return { message: "you was blocked try later" };
    }

    if (!(await bcrypt.compare(form.get("password") as string, found.password))) {
        upAttepts(found.id);
        if (found.attempts + 1 >= 3) {
            addTime(found.id);
            return { message: "wrong password ,you are blocked" };
        }
        return { message: "Wrong password" };
    }

    deleteAttempts(found.id);
    createSession(found.id, nanoid());
    (await cookies()).set('token', nanoid());

    return redirect('/profile');
};


export const verifyUser = async () => {
    const tokenData = (await cookies()).get('token')

    if (!tokenData) {
        return null
    }

    const userData = await VerifyUser(tokenData.value) as ISession

    if (!userData || userData.expires < Date.now()) {
        return null
    }


    const expire = await updateExpire(tokenData.value, userData.expires)


    const result = expire.changes == 1 && await getUserById(userData.user_id)


    return result as IUser
}