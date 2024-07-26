package com.ayush.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.model.UserDetails;
import com.ayush.repository.UserRepository;

@Service
public class UserInfoService implements UserService{
	
	
	@Autowired
	private UserRepository uSERepository;
	
	
	

	@Override
	public List<UserDetails> fetchEmployeeList() {
		// TODO Auto-generated method stub
		return (List<UserDetails>) uSERepository.findAll();
	}

}
