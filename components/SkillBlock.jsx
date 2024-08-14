import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SkillBlock = ({ icon, name }) => {
  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-6xl group-hover:text-green-400 transition-all duration-300">
              {icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SkillBlock;
