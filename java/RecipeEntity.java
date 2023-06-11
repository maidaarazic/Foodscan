package com.example.foodscan_app;

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity (tableName = "recipes")
public class RecipeEntity{

        @PrimaryKey(autoGenerate = true)
        Integer id;

        @ColumnInfo(name = "keyProduct")
        String keyProduct;

        @ColumnInfo(name = "name")
        String name;



    public RecipeEntity(String keyProduct, String name) {
        this.keyProduct = keyProduct;
        this.name= name;


    }

    public Integer getId() {
        return id;
    }

    public String getName() { return name; }

    public void setName(String name) { this.name= name;}

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKeyProduct() {
        return keyProduct;
    }

    public void setKeyProduct(String keyProduct) {
        this.keyProduct = keyProduct;
    }


}

