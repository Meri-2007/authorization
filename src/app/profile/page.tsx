import { redirect } from "next/navigation";
import { verifyUser } from "../_lib/actions";

    
export default  async function Profile() {
    let user = await verifyUser()


    if(!user) {
        return redirect('/login')
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 to-purple-900 text-white p-10 rounded-lg shadow-2xl">
          <div className="flex items-center space-x-8">
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-512.png"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
            />
            <div>
              <h1 className="text-5xl font-bold">John Doe</h1>
              <p className="text-lg text-gray-300">Software Developer</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-lg font-semibold"
                >
                  Follow
                </a>
                <a
                  href="#"
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition text-lg font-semibold"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-10">
            <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
              About
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              John is a highly skilled software developer with over 5 years of experience in full-stack
              development. He specializes in building scalable web applications and loves contributing to
              open-source projects. In his free time, he enjoys hiking and photography.
            </p>
          </div>
  
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">120</h3>
              <p className="text-gray-400">Posts</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">3.4k</h3>
              <p className="text-gray-400">Followers</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">890</h3>
              <p className="text-gray-400">Following</p>
            </div>
          </div>
  
          
        </div>
      </div>
    );
  }
  