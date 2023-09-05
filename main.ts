//기본 타입
let test: string = 'hello';
let num: number = 0;
let isFemale: boolean = true;

//참조형 타입(두 가지 방식)
let like: string[] = ['game', 'music', 'movie'];
let dislike: Array<string> = ['study', 'homework', 'exercise'];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
let abc: boolean[] = [true, false, true];
let bbc: Array<boolean> = [true, false, true];
//tuple : 배열에 들어가는 자료형이 다를때 배열의 순서마다 타입을 지정함
let arr1: [number, string] = [3, '3'];

//객체 타입지정
//interface: 객체처럼 자료의 구조가 복잡한 경우 직접 커스터마이징된 타입을 생성
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; //해당 property는 읽기 전용으로 변경 불가
	address?: string; //해당 property는 optional하게 적용
}
//Student라는 커스텀 인터페이스 타입이 지정된 객체
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	//address: 'Seoul',
};

//student1.isFemale = false;
