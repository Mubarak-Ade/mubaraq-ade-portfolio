import Image from '../assets/profile.jpg'
// import bgImage from '../assets/Wave Line.svg'

function About() {
    return ( 
        <div id='about' className="h-full items-center bg-svg-1 flex flex-col md:flex-row md:justify-around md:items-center bg-pallet-2-400 text-pallet-2-100">
            <div className="p-2">
                <div className=" size-80 rounded-2xl p-6 space-y-1">
                    <img src={Image} className='size-72 shadow-2xl shadow-slate-800 rounded-3xl' alt="" />
                </div>
            </div>
            <div className="h-80 text-xl md:w-1/2 md:h-screen md:content-center">
                <h1 className="text-4xl m-4">About me</h1>
                <p className='p-2'>I have a strong background in web development, focusing on front-end technologies such as React.js, 
                    HTML, and CSS. I enjoy creating interactive and user-friendly websites.</p>
            </div>
        </div>
     );
}

export default About;