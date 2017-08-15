package com.wafflemkr.sport.bluesombrero;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;

import com.google.gson.Gson;

public class FieldStatusTest {

	@Test
	public void testFieldStatus() {
		FieldStatus fs = new FieldStatus();
		String s = fs.getFieldElements("ul.field");
		
		
		System.out.println(s);
		
	}

}
