package com.wafflemkr.sport.bluesombrero;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;

public class FieldStatusTest {

	@Test
	public void testFieldStatus() {
		FieldStatus fs = new FieldStatus();
		JSONObject elems = fs.getFieldElements("ul.field");
		
		try {
			System.out.println(elems.toString(4));
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
