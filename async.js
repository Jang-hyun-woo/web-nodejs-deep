//
const fs = require('fs/promises');


async function read_file() {
    let file_data;

    /*
    let file_data;
    //비동기식 : 읽어오기가 완료 된 후 후행 프로세스를 진행하지않고 읽는 도중 다음 프로세스 진행 ( readFileSync는 동기식)
    file_data = fs.readFile('data.txt', function (error, file_data) {
        if(error){
            // ...
        }
        console.log('File parsing done');
        console.log(file_data.toString());

        //다른 비동기 작업을 시작 (보통 해당 방식으로 데이터베이스 처리)

    });
    */

    /*
    //패키지에서 파일시스템 가져와서 사용하는 구문, 파일읽기가 완료되면 then에 전달한 함수는 다시실행됨
    fs.readFile('data.txt')
        .then(function (file_data) {
            console.log('File parsing done');
            console.log(file_data.toString());
            console.log('Hi there!');
        }).then(function () { })
        .catch(function (error) {
            console.log(error);
        });
    */

    try {
        //해당 작업이 완료되어야 아래 내용 진행( .then 내용과 동일 )
        file_data = await fs.readFile('data.txt');
    } catch (error) {
        console.log(error);
    }
    console.log('File parsing done');
    console.log(file_data.toString());
    console.log('Hi there!');

}

read_file();

module.exports = {
    read_file: read_file
}