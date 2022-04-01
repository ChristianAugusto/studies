package com.christian.models;

import java.util.ArrayList;

public class Attribute {
    private String name;
    private ArrayList<String> values;


    public Attribute(String name) {
        this.setName(name);
        this.setValues(new ArrayList<String>());
    }


    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getValues() {
        return this.values;
    }
    public void setValues(ArrayList<String> values) {
        this.values = values;
    }
    public void setValue(String value) {
        for (String currentValue : this.values) {
            if (currentValue.equals(value)) {
                return;
            }
        }

        this.values.add(value);
    }


    public String toString() {
        String attributeString = "";

        attributeString += "@ATTRIBUTE";

        attributeString += " " + this.getName() + " ";

        if (!this.getValues().isEmpty()) {
            attributeString += "{";

            attributeString += this.getValues().get(0);
            for (int i = 1; i < this.getValues().size(); i++) {
                attributeString += ", " + this.getValues().get(i);
            }

            attributeString += "}";
        }

        return attributeString;
    }
}