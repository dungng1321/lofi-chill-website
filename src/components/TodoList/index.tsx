import React, { useState } from "react";
import { Form, Row, Col, Button, ListGroup } from "react-bootstrap";
import {
  listAdd,
  listToggleComplete,
  listRemove,
} from "../../store/slice/todoListSlice";
import Message from "../Message";
import "./styles.scss";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const [list, setList] = useState<string>("");

  const data = useAppSelector((state: RootState) => state.todoList);
  const { todoList, repeat } = data;

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(listAdd({ name: list, complete: false }));
    setList("");
  };

  const handleDelete = (item: any) => {
    dispatch(listRemove(item));
  };

  const handleToggleComplete = (item: any) => {
    dispatch(listToggleComplete(item));
  };

  return (
    <div className='todoList'>
      <Form className='mx-2 my-2' onSubmit={submitHandler}>
        <Form.Group controlId='inputList'>
          <Row>
            <Col xs={9} sm={8}>
              <Form.Control
                type='text'
                value={list}
                onChange={(e) => setList(e.target.value)}
                placeholder='Enter list'
                required
              />
            </Col>
            <Col xs={3} sm={4}>
              <Button type='submit'>Add</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {todoList.length > 0 ? (
        <>
          {repeat && (
            <Message variant='danger'>This note is already added</Message>
          )}
          <ListGroup className='todolistList'>
            {todoList.map((listItem: any) => (
              <ListGroup.Item
                variant={listItem.complete ? "success" : "primary"}
                key={listItem.name}
              >
                <Row>
                  <Col xs={8} sm={8}>
                    - {listItem.name}
                  </Col>
                  <Col xs={2} sm={2}>
                    <Button
                      variant={listItem.complete ? "success" : "danger"} // Update variant
                      onClick={() => handleToggleComplete(listItem.name)}
                    >
                      {listItem.complete ? (
                        <i className='fas fa-check'></i>
                      ) : (
                        <i className='fas fa-eraser'></i>
                      )}
                    </Button>
                  </Col>
                  <Col xs={2} sm={2}>
                    <Button
                      variant='dark'
                      onClick={() => handleDelete(listItem.name)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <ListGroup>
          <ListGroup.Item className='text-center'>
            Nothing to do yet
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;
