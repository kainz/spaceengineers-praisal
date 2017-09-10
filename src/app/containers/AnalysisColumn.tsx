import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';

import {Component} from "../common/";
import {Analysis} from "../models/";
import AnalysisSummary from "../components/AnalysisSummary";
import AnalysisBlockTable from "../components/AnalysisBlockTable";
import AnalysisComponentTable from "../components/AnalysisComponentTable";
import AnalysisIngotTable from "../components/AnalysisIngotTable";
import AnalysisOreTable from "../components/AnalysisOreTable";

const style = createStyleSheet('AnalysisColumn', (theme) => ({
}))

export interface AnalysisColumnProps {
  analysis: Analysis
}

@withStyles(style)
export default class AnalysisColumn extends Component<AnalysisColumnProps, {}> {

  constructor(props) {
    super(props);
  }

  renderRow(AnalysisRow: React.ComponentClass<AnalysisColumnProps>) {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <Card>
          <AnalysisRow analysis={this.props.analysis} />
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <Grid container spacing={16}>
        {this.renderRow(AnalysisSummary)}
        {this.renderRow(AnalysisBlockTable)}
        {this.renderRow(AnalysisComponentTable)}
        {this.renderRow(AnalysisIngotTable)}
        {this.renderRow(AnalysisOreTable)}
      </Grid>
    );
  }

}