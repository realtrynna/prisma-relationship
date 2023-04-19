import typia from "typia";

export interface ICreateUserDto {
  /**
   * @format email
   */
  email: string;

  /**
   * @minLength 2
   * @maxLength 10
   */
  name: string;

  age: number;
  gender: string;
  introduce: string;
}