package com.christian;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class DogApi {
	public static void execute() throws Exception {
		URL url = new URL("https://dog.ceo/api/breeds/list/all");
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		if (conn.getResponseCode() != 200) {
			System.out.print("deu erro... HTTP error code : " + conn.getResponseCode());
		}

		BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

		String output, json="";
		while ((output = br.readLine()) != null) {
			json += output;
		}
		System.out.println(json);
		conn.disconnect();
	}
}