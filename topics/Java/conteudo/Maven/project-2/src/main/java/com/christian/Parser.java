package com.christian;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;
import java.util.Scanner;

import com.christian.models.Arff;
import com.christian.models.Attribute;
import com.christian.utils.StringUtils;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Parser {
    public static void start() throws IOException {
        Scanner imp = new Scanner(System.in);

        System.out.print("Type de sheet (XLSX) input path: ");
        String inputPath = imp.nextLine();

        System.out.print("Type de ARFF output path: ");
        String outputPath = imp.nextLine();

        imp.close();



        String[] inputParts = inputPath.split("/");

        Arff finalArff = new Arff(outputPath, formatString(inputParts[inputParts.length - 1]));



        FileInputStream fileInputStream = new FileInputStream(new File(inputPath));


        XSSFWorkbook wb = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = wb.getSheetAt(0);


        Iterator<Row> rowIt = sheet.iterator();


        /* Iterate in columns names */
        if (rowIt.hasNext()) {
            Row row = rowIt.next();

            Iterator<Cell> cellIterator = row.cellIterator();

            while (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();

                finalArff.setAttribute(new Attribute( formatString(cell.toString()) ));
            }
        }


        /* Iterate in others rows and columns */
        while(rowIt.hasNext()) {
            Row row = rowIt.next();

            String dataInstance = "";
            Iterator<Cell> cellIterator = row.cellIterator();

            /* First cell */
            if (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();

                String cellValueFormated = formatString(cell.toString());

                finalArff.getAttributes().get(0).setValue(cellValueFormated);

                dataInstance += cellValueFormated;
            }

            /* Others cells */
            for (int i = 1; cellIterator.hasNext(); i++) {
                Cell cell = cellIterator.next();

                String cellValueFormated = formatString(cell.toString());

                finalArff.getAttributes().get(i).setValue(cellValueFormated);
                dataInstance += ", " + cellValueFormated;
            }

            finalArff.setDataInstance(dataInstance);
        }

        wb.close();
        fileInputStream.close();

        writeArff(finalArff, outputPath);
    }


    private static void writeArff(Arff file, String outputPath) throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter(outputPath.contains(".arff") ? outputPath : outputPath + ".arff"));
        writer.write(file.toString());
        writer.close();
    }

    private static String formatString(String input) {
        return StringUtils.replaceSpecialChar(input.trim().replaceAll(" ", "_"));
    }
}