import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomIconProps {
  icon: IconType;
  text?: string;
  href?: string;
}

export interface Note {
  userId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  noteId: string;
}

export interface LessonCardProps {
  lessonNum: number;
  context: string;
}

export interface LessonAdviceProps {
  cardProps: LessonCardProps;
  body: {
    user: string;
    advice: string;
  }[];
}
