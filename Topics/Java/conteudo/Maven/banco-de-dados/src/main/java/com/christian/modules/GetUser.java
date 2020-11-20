package com.christian.modules;

import com.christian.models.User;
import com.christian.repositories.MysqlConnection;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GetUser {
	public static void init() {
		Connection connection = null;
		ResultSet rs = null;

		try {
			System.out.println("[GetUser.init)] - Starting");

			MysqlConnection mysqlConnection = new MysqlConnection("jdbc:mysql://localhost:5500/local-database", "root",
					"12345678");

			connection = mysqlConnection.getConnection(true);

			rs = connection.createStatement().executeQuery("SELECT * FROM `users`");

			if (rs.next()) {
				User usr1 = new User(rs);

				System.out.println(usr1);
			}

			System.out.println("[GetUser.init)] - Finishing");
		} catch (Exception e) {
			System.out.println("[GetUser.init)] - Error");
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					System.out.println("[GetUser.init)] - Error in close resultset");
					e.printStackTrace();
				}
			}
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					System.out.println("[GetUser.init)] - Error in close connection");
					e.printStackTrace();
				}
			}
		}
	}
}
