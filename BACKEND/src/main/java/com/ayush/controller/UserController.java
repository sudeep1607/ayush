package com.ayush.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.model.UserDetails;
import com.ayush.repository.UserRepository;
import com.ayush.service.UserInfoService;

@RestController
public class UserController {

	@Autowired
	private UserInfoService userInfoService;

	@GetMapping("/getUsers")
	public List<UserDetails> getUserInfo() {

		return userInfoService.fetchEmployeeList();
	}

}
