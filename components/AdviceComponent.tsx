import { LessonAdviceProps } from "@/types";

const AdviceComponent: React.FC<LessonAdviceProps> = ({
  cardProps,
  body,
}: LessonAdviceProps) => {
  return (
    <div className="mt-12 ml-16">
      <div className="justify-center text-center text-6xl font-extrabold mb-4">
        Lesson {cardProps.lessonNum}
        <div className="text-lg font-bold text-center m-2">
          {cardProps.context}
        </div>
      </div>
      <div className="space-y-4 ">
        {body.map((item, index) => (
          <div className="collapse ">
            <input type="checkbox" className="peer " />
            <div className="indent-2 collapse-title bg-primary-button text-xl font-bold justify-center text-center text-dark-text [input:checked~&]:bg-secondary-accent [input:checked~&]:text-secondary-content">
              <div className="flex items-center justify-center ml-4 p-2">
                {item.user}
              </div>
            </div>
            <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary-accent [input:checked~&]:text-secondary-content">
              {item.advice}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdviceComponent;
