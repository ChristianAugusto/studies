package com.christian.modules;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.christian.repositories.MysqlConnection;

public class CreateUser {
	public static void init() {
		Connection connection = null;
		PreparedStatement stmt = null;

		try {
			System.out.println("[CreateUser.init] - Starting");

			String query = "INSERT INTO `users`"
					+ "(`name`,`email`,`password`,`telephone`,`document`,`documentType`,`nationality`,`register`,`roleType`)"
					+ " VALUES " + "(?,?,?,?,?,?,?,?,?)";

			System.out.println(query);

			MysqlConnection mysqlConnection = new MysqlConnection("jdbc:mysql://localhost:5500/local-database", "root",
					"12345678");

			connection = mysqlConnection.getConnection(false);

			stmt = connection.prepareStatement(query);

			stmt.setString(1, "Christian Augusto Martins dos Santos Barros");
			stmt.setString(2, "christianbetta@gmail.com");
			stmt.setString(3, "12345678");
			stmt.setString(4, "+55 (11) 99311-8482");
			stmt.setString(5, "508.569.378-78");
			stmt.setString(6, "cpf");
			stmt.setString(7, "Brasil");
			stmt.setString(8, "2020-11-20 21:15:53");
			stmt.setString(9, "master");

			stmt.execute();
			connection.commit();

			System.out.println("[CreateUser.init] - Finishing");
		} catch (Exception e) {
			System.out.println("[CreateUser.init] - Error");
			e.printStackTrace();
		} finally {
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					System.out.println("[CreateUser.init)] - Error in close statement");
					e.printStackTrace();
				}
			}
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					System.out.println("[CreateUser.init)] - Error in close connection");
					e.printStackTrace();
				}
			}
		}
	}
}
