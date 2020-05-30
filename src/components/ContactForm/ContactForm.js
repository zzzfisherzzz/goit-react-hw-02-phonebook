import React, { Component } from 'react'
import styles from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleNameChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleNumberChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.name || !this.state.number) return;
    
        this.props.onAddContact({ ...this.state });
    
        this.setState({
          name: '',
          number: '',
        });
    };


    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Name</label>
                        <input
                            type="text"
                            value={name}
                            name="name"
                            onChange={this.handleNameChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Number</label>
                        <input
                            type="tel"
                            value={number}
                            name="number"
                            onChange={this.handleNumberChange}
                            pattern="[0]{1}[0-9]{9}"
                            required    
                        />
                    </div>
                <button className={styles.formBtn} type="submit">
                    Add contact
                </button>
            </form>
        )
    }
}
