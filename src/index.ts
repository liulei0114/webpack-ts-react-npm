import MyButton from './components/MyButton';
enum BtnEnum {
  ADD = 1,
  DEL = 2
}
const Name = 'liulei best';
interface MyInterface {
  sex: boolean;
}
type MyBtnProps = {
  text: string;
  age?: number;
};
export { MyInterface, MyBtnProps, MyButton, BtnEnum, Name };
