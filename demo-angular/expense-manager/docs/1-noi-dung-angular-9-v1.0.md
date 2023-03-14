319: Events binding
Các event thường dùng



Tạo Service như một global variable (Biến toàn cục)

323: Service trong Angular

Vấn đề 1: lưu lại thông tin của Age trong mỗi tab khi chuyển đổi qua lại

Nguyên nhân -> vì mỗi lần call lại thì chúng sẽ lấy lại giá trị mặc định

Nên giờ cần lưu lại giá trị của nó, nó cũng giống như chức năng giỏ hàng

Vấn đề 2: Đang bị lặp lại method tăng tuổi

Để giải quyết được vấn đề này -> tạo ra một Service chung

Global variable:


324: Directive chỉ thị - Component Structural Attribute

phân loại:

Component Directive: Thành phần, là các chỉ thị cho component làm những logic

Structural Directive: Cấu trúc - chỉnh các DOM hiển thịt trên HTML - Document Object Model
Chỉ thị lên quan đến generate ra các cấu trúc


Attribute Directive: Dùng với các Attribute -> thay đổi thuộc tính của các thẻ DOM đối css...


Dùng Directive khi đối với các thẻ HTML thì chúng sẽ tự động thay đổi khi thay đổi giá trị của Directive

325: Template-driven form

Form căn bản - đơn giản

Introduction Form in Angular

Có 2 loại form:

Template-driven form

Reactive form:

16:00/28:00

326: Reactive Form - Form hiện đại và ngon

Phiên bản ngon hơn của Template Form



327: Fake Json Server

Tạo một Server giả để học HTTP


Cài đặt Fake Server, cung cấp các Service Json để Angular gọi vào

npm install -g json-server

329: HTTP GET Method - Observable, subscribe, Trao đổi giữa client và Server


Câu lệnh tạo re Service trong Angular: ng generate service Services/ServerHttp

câu lệnh: ng g s Services/Serverhttp

Lúc này: tạo 2 file liên quan đến Service + 1 update config trong app.module.ts

