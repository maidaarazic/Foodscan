package com.example.foodscan_app;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

public class scan extends AppCompatActivity {

    Button btn_scan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scan);

        btn_scan = findViewById(R.id.btn_scan);
        btn_scan.setOnClickListener(v -> {
            scanCode();
        });
    }

    private void scanCode() {
        IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.setPrompt("Scan a barcode");
        integrator.setOrientationLocked(true);
        integrator.initiateScan();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if (result != null) {
            if (result.getContents() != null) {
                // Retrieve the scanned product information from the result
                String scannedProductCode = result.getContents();

                // Pass the scanned product code to the product details activity
                Intent intent = new Intent(scan.this, product_scanned.class);
                intent.putExtra("scannedProductCode", scannedProductCode);
                startActivity(intent);
            } else {
                // Handle the case when scanning is canceled or failed
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setTitle("Scan Error");
                builder.setMessage("Unable to scan the barcode");
                builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                    }
                });
                builder.show();
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}
