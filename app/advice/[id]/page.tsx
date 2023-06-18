import AdviceComponent from "@/components/AdviceComponent";
import { dummyLessons } from "../../../consts/consts";

type Props = {
  params: {
    id: string;
  };
};

const Advice = ({ params: { id } }: Props) => {
  // Convert id to a number
  const lessonNum = Number(id);

  // Find the lesson that matches the lessonNum
  const lesson = dummyLessons.find((lesson) => lesson.lessonNum === lessonNum);

  // If the lesson is not found, render a not found message
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const { context, advice: body } = lesson;
  const cardProps = {
    lessonNum,
    context,
  };

  // Render the AdviceComponent with the found lesson's data
  return (
    <div className="overflow-hidden text-light-text dark:text-dark-text self-start md:w-1/2 lg:w-3/4">
      <AdviceComponent cardProps={cardProps} body={body} />
    </div>
  );
};

export default Advice;
