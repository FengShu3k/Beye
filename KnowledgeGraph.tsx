
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { FOOD_DATA } from '../constants';
import { GraphNode, GraphLink } from '../types';

const KnowledgeGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;

    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];
    const nodeMap = new Map<string, boolean>();

    // Helper to add nodes safely
    const addNode = (id: string, group: GraphNode['group'], label: string) => {
      const key = `${group}:${id}`;
      if (!nodeMap.has(key)) {
        nodes.push({ id: key, group, label });
        nodeMap.set(key, true);
      }
      return key;
    };

    FOOD_DATA.forEach(food => {
      const foodNode = addNode(food.id, 'food', food.name);
      const regionNode = addNode(food.region, 'region', food.region);
      const envNode = addNode(food.environment, 'environment', food.environment);
      const methodNode = addNode(food.eatingMethod, 'method', food.eatingMethod);

      links.push({ source: foodNode, target: regionNode, type: 'at' });
      links.push({ source: foodNode, target: envNode, type: 'in' });
      links.push({ source: foodNode, target: methodNode, type: 'by' });
    });

    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#4a5568')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 1);

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', (d) => (d.group === 'food' ? 8 : 6))
      .attr('fill', (d) => {
        switch (d.group) {
          case 'food': return '#48bb78';
          case 'region': return '#f6ad55';
          case 'environment': return '#4299e1';
          case 'method': return '#f687b3';
          default: return '#cbd5e0';
        }
      })
      .call(d3.drag<SVGCircleElement, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .text(d => d.label)
      .attr('font-size', '10px')
      .attr('fill', '#e2e8f0')
      .attr('dx', 12)
      .attr('dy', 4);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => simulation.stop();
  }, []);

  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 overflow-hidden relative">
      <h3 className="text-xl font-bold mb-4 text-green-400">生存知识图谱</h3>
      <div className="flex gap-4 mb-2 text-xs">
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span>食物</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-orange-400"></span>地域</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-400"></span>环境</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-pink-400"></span>方式</div>
      </div>
      <svg ref={svgRef} className="w-full h-[500px] cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default KnowledgeGraph;
