import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/replace';

export interface MovieProps {
  title: string;
  description: string;
  coverImage: string;
  createdAt?: Date | null;
}

export class Movie {
  private _id: string;
  private props: MovieProps;

  constructor(props: Replace<MovieProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get title() {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get description() {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get coverImage() {
    return this.props.coverImage;
  }

  public set coverImage(coverImage: string) {
    this.props.coverImage = coverImage;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
