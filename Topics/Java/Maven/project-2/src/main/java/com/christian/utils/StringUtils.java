package com.christian.utils;

import java.text.Normalizer;

public class StringUtils {

    public static String replaceSpecialChar(String input) {
        return Normalizer.normalize(input, Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "");
    }
}