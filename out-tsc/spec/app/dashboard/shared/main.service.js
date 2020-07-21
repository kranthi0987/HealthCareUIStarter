import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
let MainService = class MainService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        /**
         * Get products
         *
         * @returns {Promise<any>}
         */
        this.token = localStorage.getItem('token');
        // Http Options
        this.httpAuth = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        };
        // for post form data
        this.httpAuthform = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getProducts(),
                this.getProduct()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getProducts() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/patient/list/', this.httpAuth)
                .subscribe((response) => {
                this.products = response;
                this.onProductsChanged.next(this.products);
                resolve(response);
            }, reject);
        });
    }
    getPatientsCount(formData) {
        return this._httpClient.post('api/patient/count/', formData, this.httpAuthform).pipe(retry(1), catchError(this.handleError));
    }
    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct() {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onProductChanged.next(false);
                resolve(false);
            }
            else {
                this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                    .subscribe((response) => {
                    this.product = response;
                    this.onProductChanged.next(this.product);
                    resolve(response);
                }, reject);
            }
        });
    }
    // OBJECT WHICH WILL PASS BODY PARAMETERS
    // var myFormData = new FormData();
    // Headers
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // Body Paramenters
    // myFormData.append('image', this.filedata);
    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/' + product.id, product)
                .subscribe((response) => {
                resolve(response);
            }, reject);
        });
    }
    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/', product)
                .subscribe((response) => {
                resolve(response);
            }, reject);
        });
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
};
MainService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], MainService);
export { MainService };
//# sourceMappingURL=main.service.js.map