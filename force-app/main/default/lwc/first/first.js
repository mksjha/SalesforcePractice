import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
/**
 * Creates Account records.
 **/
export default class AccountCreator extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD, WEBSITE_FIELD,TYPE_FIELD];

    handleAccountCreated(){
        // Run code when account is created.
    }
}