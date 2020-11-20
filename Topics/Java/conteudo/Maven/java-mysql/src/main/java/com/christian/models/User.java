package com.christian.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class User {
	private Long id;
	private String name;
	private String email;
	private String password;
	private String telephone;
	private String document;
	private String documentType;
	private String nationality;
	private String register;
	private String roleType;

	public User(ResultSet rs) throws SQLException {
		this.setId(rs.getLong("id"));
		this.setName(rs.getString("name"));
		this.setEmail(rs.getString("email"));
		this.setPassword(rs.getString("password"));
		this.setTelephone(rs.getString("telephone"));
		this.setDocument(rs.getString("document"));
		this.setDocumentType(rs.getString("documentType"));
		this.setNationality(rs.getString("nationality"));
		this.setRegister(rs.getString("register"));
		this.setRoleType(rs.getString("roleType"));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getDocumentType() {
		return documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getRegister() {
		return register;
	}

	public void setRegister(String register) {
		this.register = register;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public String toString() {
		return String.format("%s - %s", this.getId().toString(), this.getName());
	}
}
