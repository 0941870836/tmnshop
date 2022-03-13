import React, { useMemo, useState } from "react";
import TodoList from "../../TodoList";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import TodoForm from "../../TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const iniTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "New",
    },
    {
      id: 2,
      title: "Sleep",
      status: "Complete",
    },
    {
      id: 3,
      title: "Code",
      status: "New",
    },
    {
      id: 4,
      title: "WC",
      status: "New",
    },
  ];

  const location = useLocation();

  const history = useHistory();

  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(iniTodoList);

  const [filteredStatus, setFilteredstatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);

    return params.status || "All";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredstatus(params.status || "All");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    console.log(todo, idx);

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "New" ? "Complete" : "New",
    };

    newTodoList[idx] = newTodo;

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredstatus("All");
    const queryParams = { status: "All" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredstatus("New");
    const queryParams = { status: "New" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleteClick = () => {
    // setFilteredstatus("Complete");
    const queryParams = { status: "Complete" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "All" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  // console.log(renderTodoList);

  const handleTodoFormSubmit = (values) => {
    console.log("Form Submit: ", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "New",
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowNewClick}>Show New</button>
        <button onClick={handleShowCompleteClick}>Show Complete</button>
      </div>
    </div>
  );
}

export default ListPage;
