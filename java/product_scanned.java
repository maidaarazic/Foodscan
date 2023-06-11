package com.example.foodscan_app;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class product_scanned extends AppCompatActivity {

    ImageView imageView;
    Button detailsButton;
    TextView nutritionalValueTextView, viewRecipesTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_scanned);

        imageView = findViewById(R.id.imageView);
        detailsButton = findViewById(R.id.detailsButton);

        detailsButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Navigate to the RecipeListViewAdapter activity
                Intent intent = new Intent(product_scanned.this, meals.class);
                startActivity(intent);
            }
        });
    }
}
