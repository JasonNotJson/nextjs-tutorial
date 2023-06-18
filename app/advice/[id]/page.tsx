import { dummyLessons } from "../../../consts/consts";

type Props = {
  params: {
    id: string;
  };
};

const Advice = ({ params: { id } }: Props) => {
  console.log("Raw id:", id);

  // Convert id to a number
  const lessonNum = Number(id);
  console.log("Converted lessonNum:", lessonNum);

  // Find the lesson that matches the lessonNum
  const lesson = dummyLessons.find((lesson) => lesson.lessonNum === lessonNum);

  console.log("Matching lesson:", lesson);

  // If the lesson is not found, render a not found message
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  // Render the information from the lesson
  return (
    <div>
      <h1>Lesson {lesson.lessonNum}</h1>
      <p>Context: {lesson.context}</p>
      <h2>Advice:</h2>
      <ul>
        {lesson.advice.map((advice, index) => (
          <li key={index}>
            <strong>{advice.user}:</strong> {advice.advice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advice;
