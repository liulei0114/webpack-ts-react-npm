/**
 * 已模块声明，会有代码提示
 */
declare module '@liulei19960114/my-btn' {
  export interface MyInterface {
    sex: boolean;
  }
  export type MyBtnProps = {
    text: string;
    age?: number;
  };
  export declare enum BtnEnum {
    ADD = 1,
    DEL = 2,
    UPDATE = 3
  }
  export declare const Name = 'liu';
  export const MyButton: React.FC<MyBtnProps>;
}
