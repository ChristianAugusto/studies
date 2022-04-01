package com.christian.models;

import java.util.ArrayList;

public class Arff {
    private String outputPath;
    private String relationName;
    private ArrayList<Attribute> attributes;
    private String dataInstances;


    public Arff(String outputPath, String relationName) {
        this.setOutputPath(outputPath);
        this.setRelationName(relationName);
        this.setAttributes(new ArrayList<Attribute>());
        this.setDataInstances("");
    }


    public String getOutputPath() {
        return outputPath;
    }
    public void setOutputPath(String outputPath) {
        this.outputPath = outputPath;
    }

    public String getRelationName() {
        return relationName;
    }
    public void setRelationName(String relationName) {
        this.relationName = relationName;
    }

    public ArrayList<Attribute> getAttributes() {
        return attributes;
    }
    public void setAttributes(ArrayList<Attribute> attributes) {
        this.attributes = attributes;
    }
    public void setAttribute(Attribute attribute) {
        this.attributes.add(attribute);
    }

    public String getDataInstances() {
        return dataInstances;
    }
    public void setDataInstances(String dataInstances) {
        this.dataInstances = dataInstances;
    }
    public void setDataInstance(String dataInstance) {
        this.dataInstances += dataInstance + "\n";
    }


    public String toString() {
        String arrfString = "";

        arrfString = "@RELATION " + this.getRelationName() + "\n";
        arrfString += "\n";

        for (Attribute aux : this.getAttributes()) {
            arrfString += aux.toString() + "\n";
        }
        arrfString += "\n";


        arrfString += "@DATA\n";
        arrfString += this.getDataInstances();

        return arrfString;
    }
}