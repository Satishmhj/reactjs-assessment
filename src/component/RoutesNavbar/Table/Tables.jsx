import React, { useEffect } from 'react'
import Header from '../../header/Header'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { ForTableAction } from '../../Redux/Action/ForTableAction';
import Footer from '../../Footer/Footer';

const Tables = () => {
    const dispatch = useDispatch();

    const table = useSelector(state => state.stock.for_table);


    useEffect(() => {
        dispatch(ForTableAction())
    }, []);
    return (
        <>
            <Header />
            <section>
                <div className='container'>
                    <h3 className='text-center mb-4'>Global Market Open & Close Status</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Market Type</th>
                                <th>Region</th>
                                <th>Primary Exchanges</th>
                                <th>Local Open</th>
                                <th>Local Close</th>
                                <th>Current Status</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                table?.markets?.map(({ market_type, region, primary_exchanges, local_open, local_close, current_status, notes }, index) => (
                                    <tr key={index}>
                                        <td>{market_type}</td>
                                        <td>{region}</td>
                                        <td>{primary_exchanges}</td>
                                        <td>{local_open}</td>
                                        <td>{local_close}</td>
                                        <td>{current_status}</td>
                                        <td>{notes || "No Notes"}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Tables