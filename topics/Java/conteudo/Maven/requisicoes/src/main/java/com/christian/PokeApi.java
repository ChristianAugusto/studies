package com.christian;


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import com.google.gson.Gson;


public class PokeApi {
	public static void execute() throws Exception {
		URL url = new URL("https://pokeapi.co/api/v2/pokemon?limit=50&offset=850");
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		if (conn.getResponseCode() != 200) {
			System.out.print("deu erro... HTTP error code : " + conn.getResponseCode());
		}

		BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));


		Gson gson = new Gson();		
		GetPokemonsReturn getReturn = gson.fromJson(br, GetPokemonsReturn.class);
		
		System.out.println("Count: " + getReturn.getCount());
		System.out.println("Results size: " + getReturn.getResults().length);

		conn.disconnect();
	}

	
	private class GetPokemonsReturn {
		private int count;
//		private ArrayList<Pokemon> results;
		private Pokemon[] results;


		public int getCount() {
			return count;
		}
		public void setCount(int count) {
			this.count = count;
		}

//		public ArrayList<Pokemon> getResults() {
//			return results;
//		}
//		public void setResults(ArrayList<Pokemon> results) {
//			this.results = results;
//		}

		public Pokemon[] getResults() {
			return results;
		}
		public void setResults(Pokemon[] results) {
			this.results = results;
		}
	}
	
	private class Pokemon {
		private String name;
		private String url;


		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}

		public String getUrl() {
			return url;
		}
		public void setUrl(String url) {
			this.url = url;
		}
	}
}