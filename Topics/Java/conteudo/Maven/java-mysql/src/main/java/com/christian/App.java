package com.christian;

import com.christian.modules.CreateUser;
import com.christian.modules.GetUser;

public class App {
	public static void main(String[] args) {
		CreateUser.init();
        GetUser.init();
	}
}
