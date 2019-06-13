package com.oldhu.demo;

public class Result {
    private final int error;
    private final String msg;

    public Result(int error, String msg) {
        this.error = error;
        this.msg = msg;
    }

    public int getError() {
        return error;
    }

    public String getMsg() {
        return msg;
    }
}