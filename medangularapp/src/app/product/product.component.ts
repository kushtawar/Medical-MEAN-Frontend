import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

declare var M: any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
  }
  resetForm(form?: NgForm){
    console.log("In reset form");
    if (form){
      form.reset();
    }
      this.productService.selectedProduct = {
        _id: "",
        productname: "",
        productassetid: "",
        productweight: "",
        productmanufacturer: ""
      }
    
  }

  onSubmit(form : NgForm){
    if (form.value._id == ""){
    console.log("insubmit");
    this.productService.postProduct(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshProductList();
      M.toast({ html: 'Inserted successfully',classes: 'rounded'});
    });
  } else
  {
    console.log("Update Button");
    this.productService.putProduct(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshProductList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });

   
  }
  }
  refreshProductList() {
    this.productService.getProductList().subscribe((res) => {
      this.productService.products = res as Product[];
    });
  }

    onEdit(prod : Product){
      console.log("inedit");
      this.productService.selectedProduct=prod;
    }
    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.productService.deleteProduct(_id).subscribe((res) => {
          this.refreshProductList();
          this.resetForm(form);
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
      }
    }

}