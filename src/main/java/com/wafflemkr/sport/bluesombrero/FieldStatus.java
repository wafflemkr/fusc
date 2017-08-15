package com.wafflemkr.sport.bluesombrero;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import springfox.documentation.spring.web.json.Json;


public class FieldStatus {
	
	
	private ArrayList<FieldStatusType> fields = new ArrayList<FieldStatusType>();
	
	private Document doc;
	
	public FieldStatus() {
		
		try {
			doc = Jsoup.connect(BlueSombreroConstants.fuscFieldStatusUrl).get();
		} catch (IOException e) {
			doc = null;
			e.printStackTrace();
		}
	}
	
	public String getFieldElements(String fieldCSSClass) {
		
		if (doc == null) {
			return null;
		}
		
		Elements elems = doc.select(fieldCSSClass);
		
		Elements listItems = elems.select("li");
		
		for (Element element : listItems) {
			
			FieldStatusType fd = new FieldStatusType();
			String text = element.text();
			String delim = "Updated:";
			String[] tokens = text.split(delim);
			fd.setFieldName(tokens[0].trim());
			fd.setUpdated(tokens[1].trim());
			if (element.toString().contains("open")) { 
				fd.setStatus("OPEN");
			} else if (element.toString().contains("close")) {
				fd.setStatus("CLOSED");
			} else if (element.toString().contains("partial")) {
				fd.setStatus("PARTIALLY OPEN");
			}
			fields.add(fd);
		}
		//JSONObject obj = new JSONObject("fields", new JSONArray(fields));
//		Gson obj;
//		obj = new Gson();
//		
//		obj.toJson(fields, ArrayList.class);
//		return obj;
		Gson gson = new Gson();
		Type listOfTestObject = new TypeToken<ArrayList<FieldStatusType>>(){}.getType();
		String s = gson.toJson(fields, listOfTestObject);
		return s;
	}
	

}

