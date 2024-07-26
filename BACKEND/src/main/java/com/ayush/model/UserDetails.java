package com.ayush.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "user_details")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDetails {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
		  
	  @Column(name="Employee_id")
	  private Long employeeId;
	  private String username;
	  @Column(name="Email_id")
	  private String emailid;
	  private Long phoneno;
	  private Date dob; 
	  private String password;
	  private String createdon; 
	  private String gender;
	  
	  public Long getId() { return id; }
	  
	  public void setId(Long id) { this.id = id; }
	  
	  public Long getEmployeeId() { return employeeId; }
	  
	  public void setEmployeeId(Long employeeId) { this.employeeId = employeeId; }
	  
	  public String getUsername() { return username; }
	  
	  public void setUsername(String username) { this.username = username; }
	  
	  public String getEmailid() { return emailid; }
	  
	  public void setEmailid(String emailid) { this.emailid = emailid; }
	  
	  public Long getPhoneno() { return phoneno; }
	  
	  public void setPhoneno(Long phoneno) { this.phoneno = phoneno; }
	  
	  public Date getDob() { return dob; }
	  
	  public void setDob(Date dob) { this.dob = dob; }
	  
	  public String getPassword() { return password; }
	  
	  public void setPassword(String password) { this.password = password; }
	  
	  public String getCreatedon() { return createdon; }
	  
	  public void setCreatedon(String createdon) { this.createdon = createdon; }
	  
	  
	  public String getGender() { return gender; }
	  
	  public void setGender(String gender) { this.gender = gender; }
	  
	  @Override public String toString() { return "UserDetails [id=" + id +
	  ", employeeId=" + employeeId + ", username=" + username + ", emailid=" +
	  emailid + ", phoneno=" + phoneno + ", dob=" + dob + ", password=" + password
	  + ", createdon=" + createdon + ", gender=" +
	  gender + ", getId()=" + getId() + ", getEmployeeId()=" + getEmployeeId() +
	  ", getUsername()=" + getUsername() + ", getEmailid()=" + getEmailid() +
	  ", getPhoneno()=" + getPhoneno() + ", getDob()=" + getDob() +
	  ", getPassword()=" + getPassword() + ", getCreatedon()=" + getCreatedon() +
	  ",  getGender()=" + getGender() +
	  ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
	  + super.toString() + "]"; }
	 

}