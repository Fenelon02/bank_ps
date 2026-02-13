const logos = [
    {
      "name": "JavaScript",
      "slug": "javascript",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      "name": "Python",
      "slug": "python",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      "name": "Java",
      "slug": "java",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    
    {
      "name": "C++",
      "slug": "cpp",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      "name": "Go",
      "slug": "go",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
    },
    
  ]



export default function APICard() {
  return(
    <div className="m-4 bg-blue-900 p-6 mx-12 md:mx-14 lg:mx-22 rounded-lg text-white grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 items-center">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl text-center lg:text-5xl">API de fácil integração a <br />diferentes sistemas</h2>
       <div className="flex justify-center flex-wrap">
        {logos.map((logo, index) => 
          (
            <img key={index} src={logo.logoUrl} alt={logo.name} className="h-12  md:h-25 md:w-25 lg:h-30 w-12 lg:w-30 m-2 inline-block" />
          ))}
       </div>
    </div>
  )
}