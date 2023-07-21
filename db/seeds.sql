USE employee_db; 

INSERT INTO departments (name) VALUES 
('Sales'), 
('Marketing'), 
('Customer Service');

INSERT INTO roles (title, salary, department_id) VALUES 
('Receptionist', 60000, 1), 
('Tele-Marketer', 60000, 2); 

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, 1), 
('Mary', 'Oliver', 2, 1); 
('Charlie', 'Crockett', 2, null); 