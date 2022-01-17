import { CloseIcon } from './icons';

const User = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");
  return (
    <div id="user-menu" className="fixed shadow-2xl hidden font-mono rounded-lg select-none skew-y-3 md:skew-y-6 top-72 right-6 bg-slate-600 opacity-80 z-[90]">
      <CloseIcon menuID="user-menu"/>
      <h1 className="py-4 pl-4">current user: <div className="pl-6">Default</div></h1>
      <h2 className="pb-4 pl-4">current image: <div className="pl-6">stein egil liland (default)</div></h2>
      <h3 className="pb-4 pl-4">current audio:<div className="pl-6">disquiet (default)</div></h3>
      <h4 className="max-w-xs pr-4 text-right underline">
        <a href="" className="hover:text-slate-300">Log in or create an account to upload your own content to explore</a>
      </h4>

      <h5 className="py-4 pl-4">current time: <div className="pl-6">{time}</div></h5>
    </div>
  )
}

export default User;
