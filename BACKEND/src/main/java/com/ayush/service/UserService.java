package com.ayush.service;

import java.util.List;

import com.ayush.model.UserDetails;

public interface UserService {
	
    // read operation
    List<UserDetails> fetchEmployeeList();

}
