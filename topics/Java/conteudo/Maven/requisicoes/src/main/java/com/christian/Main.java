package com.christian;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import com.google.gson.Gson;

public class Main {
	public static void main(String[] args) throws Exception {
		DogApi.execute();
		PokeApi.execute();
	}
}