package com.christian.repositories;

import java.sql.Connection;
import java.sql.DriverManager;

public class MysqlConnection {
	private String jdbcSring;
	private String host;
	private int port;
	private String database;
	private String username;
	private String password;

	public MysqlConnection(String host, int port, String database, String username, String password) {
		this.host = host;
		this.port = port;
		this.database = database;
		this.username = username;
		this.password = password;
		this.jdbcSring = null;
	}

	public MysqlConnection(String jdbcSring, String username, String password) {
		this.jdbcSring = jdbcSring;
		this.username = username;
		this.password = password;
	}

	public Connection getConnection(boolean autoCommit) {
		try {
			String url = null;

			if (jdbcSring == null) {
				url = String.format("jdbc:mysql://%s:%d/%s", this.host, this.port, this.database);
			} else {
				url = jdbcSring;
			}

			Connection connection = DriverManager.getConnection(url, this.username, this.password);

			connection.setAutoCommit(autoCommit);

			return connection;
		} catch (Exception e) {
			System.out.println(e.toString());
			System.out.println("Error in get connection");
			return null;
		}
	}
}