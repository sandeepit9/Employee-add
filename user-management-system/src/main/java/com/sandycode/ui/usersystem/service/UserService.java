package com.sandycode.ui.usersystem.service;

import com.sandycode.ui.usersystem.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User findUserById(long id);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
