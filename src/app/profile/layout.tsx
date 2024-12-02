interface IProps {
    children: React.ReactNode;
  }
  
  export default function Layout({ children }: IProps) {
    return (
      <div className="s bg-gray-300 text-gray-900">
        <nav className="bg-gradient-to-br from-gray-800 to-purple-900 text-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold">
              <a href="#" className="text-purple-400 hover:text-white">
                Social Net
              </a>
            </div>
  
          
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#profile"
                  className="hover:text-purple-400 transition"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="hover:text-purple-400 transition"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#photos"
                  className="hover:text-purple-400 transition"
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  className="hover:text-purple-400 transition"
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  href="#logout"
                  className="hover:text-purple-400 transition"
                >
                  Logout
                </a>
              </li>
            </ul>
  
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-512.png"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
              <span>John Doe</span>
            </div>
          </div>
        </nav>
  
       
        <main className="container mx-auto px-6 py-10">{children}</main>
      </div>
    );
  }
  