import ProjectCard from "../ProjectCard";

let ProjectSection = () => {
  return (
    <div className="mt-40">
      <h2 className="flex justify-center flex-wrap p-4">Projects</h2>

     <div
     id="projects"
  className="
    flex flex-wrap justify-center gap-4
    w-full
    p-4 sm:p-6
    bg-slate-900/40 dark:bg-slate-800/30
    border border-slate-500 rounded-2xl
    shadow-lg backdrop-blur-md
    // h-[50vh]        //  mobile: iPhones & small screens 
    sm:max-h-[60vh]     //small tablets & up 
    md:max-h-[50vh]     //  medium screens & up 
    lg:max-h-[70vh]     // big desktop screens 
    overflow-y-auto
    mb-16
  "
>
        <ProjectCard title="File Sync" image="/projects/file-sync.png" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" link="https://github.com/..." />
       
      </div>
    </div>
  )
}

export default ProjectSection;
