Todo List Project - React-Hook
1. Create Project: mini-project - 3 (todo-app)
2. Phân tích giao diện, xây dựng các function components
3. Chuyển giao diện html -> JSX - chia các function components 
    3.1. App
    3.2. Title 
    3.3. ListTask
    3.4. Task
    3.5. Control
    3.6. Form
4. Phân tích và xử lý các chức năng
    4.1. Chức năng show ListTask
    4.2. Chức năng Toggle Form (Ẩn/ Hiện Form)
    4.3. Chức năng Add Task
        Thêm mới 1 Task vào ListTask
    4.4. Chức năng Edit Task
        Chọn Task từ ListTask -> Hiện thị lên Form 
    4.5. Chức năng Delete Task 
    4.6. Chức năng search
    4.7. Chức năng soft
5. Xử lý các chức năng 
    5.1. Chức năng show ListTask
        - App 
            + Khởi tạo mockdata -> localstorage
            + useState -> Khởi tạo dữ liệu
            + useEffect để thực hiện các tác vụ khác nhau -> 
                ++ Cập nhật ListTask và cập nhật localstorage 
            + Truyền dữ liệu từ App vào ListTask
        - LisTask: 
            + Nhận dữ liệu từ props -> Chuyền vào Task
        - Task
            + Nhập dữ liệu từ props -> Hiển thị lên các phần tử jsx 
    5.2. Chức năng toggle form (ẩn hiện)
        - App: 
            ++ state: false
        - Control: 
            ++ Click vào Add Task -> update state (app) = true
        - Task: Edit -> update state (app) = true



    5.5. Chức năng Delete Task 
        - Task (Component):
            ++ handleDelete (task) => ListTask (component) => App (Component)
            ++ App:
                => Tìm và xóa task trong task
    5.6. Chức năng search 
        - Control: (component)
            ++ onSearch (ketword) => App (component)
            ++ App (component)
                +++ Xử lý tìm kiếm trong tasks -> render -> ListTask -> Task.