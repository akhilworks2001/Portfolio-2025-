const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
            <a className="social-icon relative group" href="https://github.com/akhilworks2001" target="_blank">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white text-black px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all">
                    Github
                </div>
            </a>
            <a className="social-icon relative group" href="https://www.linkedin.com/in/akhilverma01" target="_blank">
                <img src="/assets/linkdin.png" alt="github" className="w-1/2 h-1/2" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white text-black px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all">
                    Linkdin
                </div>
            </a>
        </div>
  
        <p className="text-white-500">© 2025 Akhil Verma. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;